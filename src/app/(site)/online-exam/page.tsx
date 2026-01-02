"use client";
import { useState, useEffect, useRef } from "react";
import { students } from "@/data/exam-students";
import { questions } from "@/data/questions";
import '../../../styles/exam-portal.css';

export default function ExamPortal() {
    const [screen, setScreen] = useState("instructions");
    const [currentStudent, setCurrentStudent] = useState<any>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(100).fill(null));
    const [skippedQuestions, setSkippedQuestions] = useState<boolean[]>(Array(100).fill(false));
    const [timeLeft, setTimeLeft] = useState(60);
    const [examStartTime, setExamStartTime] = useState<number | null>(null);
    const [totalElapsed, setTotalElapsed] = useState(0);
    const [tabChangeCount, setTabChangeCount] = useState(0);
    const [rollNumber, setRollNumber] = useState("");
    const [dob, setDob] = useState("");
    const [loginError, setLoginError] = useState("");

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const totalTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Question Timer with useRef to avoid dependency issues
    useEffect(() => {
        if (screen !== "exam") return;

        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Auto skip and move to next
                    setSkippedQuestions((s) => {
                        const newS = [...s];
                        newS[currentQuestionIndex] = answers[currentQuestionIndex] === null;
                        return newS;
                    });

                    if (currentQuestionIndex < 99) {
                        setCurrentQuestionIndex((c) => c + 1);
                        return 60;
                    } else {
                        setScreen("result");
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [screen, currentQuestionIndex, answers]);

    // Total Time Tracker
    useEffect(() => {
        if (screen !== "exam" || !examStartTime) return;

        if (totalTimerRef.current) clearInterval(totalTimerRef.current);

        totalTimerRef.current = setInterval(() => {
            setTotalElapsed(Math.floor((Date.now() - examStartTime) / 1000));
        }, 1000);

        return () => {
            if (totalTimerRef.current) clearInterval(totalTimerRef.current);
        };
    }, [screen, examStartTime]);

    // Tab Detection
    useEffect(() => {
        if (screen !== "exam") return;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                setTabChangeCount((c) => c + 1);
                setSkippedQuestions((s) => {
                    const newS = [...s];
                    newS[currentQuestionIndex] = true;
                    return newS;
                });
                // Auto advance
                if (currentQuestionIndex < 99) {
                    setCurrentQuestionIndex((c) => c + 1);
                    setTimeLeft(60);
                } else {
                    setScreen("result");
                }
            }
        };

        const handleBlur = () => {
            setTabChangeCount((c) => c + 1);
            setSkippedQuestions((s) => {
                const newS = [...s];
                newS[currentQuestionIndex] = true;
                return newS;
            });
            if (currentQuestionIndex < 99) {
                setCurrentQuestionIndex((c) => c + 1);
                setTimeLeft(60);
            } else {
                setScreen("result");
            }
        };

        const handleContextMenu = (e: MouseEvent) => e.preventDefault();
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.ctrlKey && e.shiftKey && e.key === "C") || (e.ctrlKey && e.key === "u")) {
                e.preventDefault();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [screen, currentQuestionIndex]);

    const handleLogin = () => {
        const student = students.find((s) => s.rollNumber === rollNumber.toUpperCase() && s.dob === dob);
        console.log("Logging in with:", rollNumber, dob, "Found student:", student);
        if (student) {
            setCurrentStudent(student);
            setLoginError("");
            setExamStartTime(Date.now());
            setScreen("exam");
        } else {
            setLoginError("❌ Invalid Roll Number or Date of Birth. Please try again.");
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < 99) {
            setCurrentQuestionIndex((c) => c + 1);
            setTimeLeft(60);
        } else {
            setScreen("result");
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((c) => c - 1);
            setTimeLeft(60);
        }
    };

    const handleSelectAnswer = (optionIndex: number) => {
        setAnswers((a) => {
            const newA = [...a];
            newA[currentQuestionIndex] = optionIndex;
            return newA;
        });
        setSkippedQuestions((s) => {
            const newS = [...s];
            newS[currentQuestionIndex] = false;
            return newS;
        });
    };

    const jumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setTimeLeft(60);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const calculateResults = () => {
        let correct = 0, wrong = 0, skipped = 0;
        answers.forEach((answer, index) => {
            if (answer === null || skippedQuestions[index]) skipped++;
            else if (answer === questions[index].correct) correct++;
            else wrong++;
        });
        return {
            correct,
            wrong,
            skipped,
            percentage: ((correct / 100) * 100).toFixed(2),
            passed: correct >= 40,
        };
    };

    const getQuestionStatus = (index: number) => {
        if (index === currentQuestionIndex) return "current";
        if (answers[index] !== null) return "answered";
        if (skippedQuestions[index]) return "skipped";
        return "not-visited";
    };

    if (screen === "instructions") {
        return (
            <div className="container">
                <div className="card">
                    <div className="header-icon">📝</div>
                    <h1>Computer Science Examination {new Date().getFullYear()} </h1>
                    <p className="subtitle">Final Examination - Total Marks: 100</p>
                    <div className="warning-box">
                        <div className="warning-title">⚠️ Important Instructions - Read Carefully</div>
                        <ul>
                            <li><strong>Total Questions:</strong> 100 Multiple Choice Questions</li>
                            <li><strong>Time per Question:</strong> 60 seconds (Auto-advance)</li>
                            <li><strong>Total Marks:</strong> 100 (1 mark each)</li>
                            <li><strong>Passing Marks:</strong> 40</li>
                            <li><strong>DO NOT switch tabs or minimize browser</strong> - Question will be auto-skipped!</li>
                            <li><strong>DO NOT refresh the page</strong> - Your progress will be lost!</li>
                            <li>Right-click and keyboard shortcuts are disabled during exam</li>
                            <li>Each question auto-advances after 60 seconds</li>
                            <li>You can navigate back to previous questions using Previous button</li>
                            <li>All unanswered questions will be marked as skipped</li>
                        </ul>
                    </div>
                    <div className="info-box">
                        <h3 style={{ color: "#1e40af", marginBottom: "15px" }}>Before You Start:</h3>
                        <ul>
                            <li>Close all other applications and browser tabs</li>
                            <li>Ensure stable internet connection</li>
                            <li>Keep your Roll Number and Date of Birth ready</li>
                            <li>Device should be fully charged or plugged in</li>
                            <li>Read each question carefully before answering</li>
                        </ul>
                    </div>
                    <button className="btn btn-primary" onClick={() => setScreen("login")}>
                        I Understand - Proceed to Login
                    </button>
                </div>
            </div>
        );
    }

    if (screen === "login") {
        return (
            <div className="container">
                <div className="card">
                    <div className="header-icon">👤</div>
                    <h2>Student Login</h2>
                    <p className="subtitle">Enter your credentials to start the exam</p>
                    <div className="form-group">
                        <label>Roll Number</label>
                        <input
                            type="text"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value.toUpperCase())}
                            placeholder="e.g., CS2024001"
                            style={{ textTransform: "uppercase" }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>
                    {loginError && <div className="error">{loginError}</div>}
                    <button className="btn btn-primary" onClick={handleLogin}>
                        Login & Start Exam
                    </button>
                    <button className="btn btn-secondary" onClick={() => setScreen("instructions")}>
                        Back to Instructions
                    </button>
                    <div className="demo-credentials">
                        <h3>📌 Demo Login Credentials (For Testing):</h3>
                        <p><strong>Roll:</strong> CS2024001 | <strong>DOB:</strong> 2005-03-15</p>
                        <p><strong>Roll:</strong> CS2024002 | <strong>DOB:</strong> 2005-07-22</p>
                        <p><strong>Roll:</strong> CS2024003 | <strong>DOB:</strong> 2005-01-10</p>
                    </div>
                </div>
            </div>
        );
    }

    if (screen === "exam") {
        const currentQuestion = questions[currentQuestionIndex];
        const progress = Math.round(((currentQuestionIndex + 1) / 100) * 100);

        return (
            <div className="container">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                        <div>
                            <h2 style={{ margin: 0, textAlign: "left" }}>{currentStudent?.name}</h2>
                            <p style={{ color: "#6b7280", margin: "5px 0" }}>Roll No: {currentStudent?.rollNumber}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ color: "#6b7280", fontSize: "0.9em" }}>Total Time Elapsed</div>
                            <div style={{ fontSize: "1.8em", fontWeight: "bold", color: "#667eea" }}>
                                {formatTime(totalElapsed)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-text">
                        <span>Question {currentQuestionIndex + 1} of 100</span>
                        <span>Progress: {progress}%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    {tabChangeCount > 0 && (
                        <div className="tab-warning">
                            ⚠️ Warning: You switched tabs {tabChangeCount} time(s). Questions were auto-skipped!
                        </div>
                    )}
                </div>

                <div className="card">
                    <div className="question-header">
                        <div className="question-number">Question {currentQuestion.id}</div>
                        <div className="timer">
                            <svg className="timer-icon" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ef4444" }}>
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                            </svg>
                            <div className={`timer-display ${timeLeft <= 10 ? "warning" : ""}`}>
                                {formatTime(timeLeft)}
                            </div>
                        </div>
                    </div>
                    <div className="question-text">{currentQuestion.question}</div>
                    <div className="options">
                        {currentQuestion.options.map((option, index) => (
                            <div
                                key={index}
                                className={`option ${answers[currentQuestionIndex] === index ? "selected" : ""}`}
                                onClick={() => handleSelectAnswer(index)}
                            >
                                <div className="option-radio"></div>
                                <div className="option-text">
                                    {String.fromCharCode(65 + index)}. {option}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="navigation">
                        <button
                            className="nav-btn btn-secondary"
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            ← Previous
                        </button>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ color: "#6b7280", fontSize: "0.9em" }}>
                                {answers[currentQuestionIndex] !== null ? "✓ Answer Selected" : "No Answer Selected"}
                            </div>
                        </div>
                        <button
                            className={`nav-btn ${currentQuestionIndex === 99 ? "btn-success" : "btn-primary"}`}
                            onClick={handleNextQuestion}
                        >
                            {currentQuestionIndex === 99 ? "Submit Exam" : "Next →"}
                        </button>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: "20px" }}>Question Status Grid:</h3>
                    <div className="question-grid">
                        {Array.from({ length: 100 }, (_, i) => (
                            <div
                                key={i}
                                className={`question-bubble ${getQuestionStatus(i)}`}
                                onClick={() => jumpToQuestion(i)}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="legend">
                        <div className="legend-item">
                            <div className="legend-box" style={{ background: "#667eea" }}></div>
                            <span>Current</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-box" style={{ background: "#10b981" }}></div>
                            <span>Answered</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-box" style={{ background: "#ef4444" }}></div>
                            <span>Skipped</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-box" style={{ background: "#e5e7eb" }}></div>
                            <span>Not Visited</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Result Screen
    const results = calculateResults();

    return (
        <div className="container">
            <div className="card">
                <div className={`result-icon ${results.passed ? "pass" : "fail"}`}>
                    {results.passed ? "✓" : "✗"}
                </div>
                <h1>{results.passed ? "Congratulations!" : "Better Luck Next Time"}</h1>
                <p className="subtitle">
                    {results.passed ? "You have passed the examination" : "You need to improve your score"}
                </p>
                <div className="stats-grid">
                    <div className="stat-card" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
                        <div className="stat-label">Your Score</div>
                        <div className="stat-value" style={{ color: "#1e40af" }}>{results.correct}/100</div>
                    </div>
                    <div className="stat-card" style={{ background: "linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%)" }}>
                        <div className="stat-label">Percentage</div>
                        <div className="stat-value" style={{ color: "#6b21a8" }}>{results.percentage}%</div>
                    </div>
                    <div className="stat-card" style={{ background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" }}>
                        <div className="stat-label">Correct Answers</div>
                        <div className="stat-value" style={{ color: "#065f46" }}>{results.correct}</div>
                    </div>
                    <div className="stat-card" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
                        <div className="stat-label">Wrong Answers</div>
                        <div className="stat-value" style={{ color: "#991b1b" }}>{results.wrong}</div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", margin: "30px 0" }}>
                    <div className="info-box">
                        <h3 style={{ color: "#1e40af", marginBottom: "15px" }}>Student Details</h3>
                        <p><strong>Name:</strong> {currentStudent?.name}</p>
                        <p><strong>Roll Number:</strong> {currentStudent?.rollNumber}</p>
                        <p><strong>Class:</strong> {currentStudent?.class}</p>
                    </div>
                    <div className="info-box">
                        <h3 style={{ color: "#1e40af", marginBottom: "15px" }}>Exam Statistics</h3>
                        <p><strong>Total Questions:</strong> 100</p>
                        <p><strong>Skipped Questions:</strong> {results.skipped}</p>
                        <p><strong>Time Taken:</strong> {formatTime(totalElapsed)}</p>
                        <p><strong>Tab Switches:</strong> {tabChangeCount}</p>
                    </div>
                </div>
                {results.passed ? (
                    <div style={{ background: "#d1fae5", borderLeft: "4px solid #10b981", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
                        <h3 style={{ color: "#065f46", marginBottom: "10px" }}>🎉 Exam Passed!</h3>
                        <p style={{ color: "#047857" }}>Congratulations! You have successfully passed the examination.</p>
                    </div>
                ) : (
                    <div style={{ background: "#fee2e2", borderLeft: "4px solid #ef4444", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
                        <h3 style={{ color: "#991b1b", marginBottom: "10px" }}>📊 Exam Not Passed</h3>
                        <p style={{ color: "#991b1b" }}>You need 40 marks to pass. Keep practicing and try again!</p>
                    </div>
                )}
                <button className="btn btn-primary" onClick={() => window.location.reload()}>
                    Start New Exam
                </button>
            </div>
        </div>
    );
}
