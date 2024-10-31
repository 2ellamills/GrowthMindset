"use client";

import React, { useState } from 'react';

const questions = [
  {
    text: "רמת האינטיליגנציה שלך מולדת ואין יותר מדי מה לעשות בקשר לזה",
    type: "negative"
  },
  {
    text: "לא משנה מה רמת האינטיליגנציה שאיתה נולדתי, אפשר לשפר אותה לא מעט",
    type: "positive"
  },
  {
    text: "תמיד אפשר לשפר את האינטלגנציה באופן מהותי",
    type: "positive"
  },
  {
    text: "אני מי שאני; אי אפשר באמת לשנות זאת",
    type: "negative"
  },
  {
    text: "תמיד אפשר לשנות דברים בסיסיים במי שאתה",
    type: "positive"
  },
  {
    text: "כל אחד יכול לפתח כישרון מוסיקלי",
    type: "positive"
  },
  {
    text: "מעטים האנשים שטובים באמת בספורט; חייבים להיוולד עם הכשרון הזה",
    type: "negative"
  },
  {
    text: "אם נולדת לתרבות שמעריכה מתמטיקה, יהיה לך הרבה יותר קל ללמוד אותה",
    type: "negative"
  },
  {
    text: "אם תעבוד קשה יותר - תצליח בכל תחום שתבחר",
    type: "positive"
  },
  {
    text: "כל אחד יכול להשתנות באופן משמעותי ומהותי",
    type: "positive"
  },
  {
    text: "מלחיץ אותי לנסות דברים חדשים ולכן אני נמנע מכך",
    type: "negative"
  },
  {
    text: "יש אנשים שפשוט נולדים טובים ואדיבים ויש אנשים שלא. אנשים לא משתנים",
    type: "negative"
  },
  {
    text: "אני אוהבת לקבל משוב מהממונים עלי על הביצועים שלי",
    type: "positive"
  },
  {
    text: "אני נוטה לכעוס כשנותנים לי משוב על הביצועים שלי",
    type: "negative"
  },
  {
    text: "כל בני האדם (למעט אלו בעלי צרכים מיוחדים) מסוגלים ללמוד כל דבר",
    type: "positive"
  },
  {
    text: "אפשר ללמוד דברים חדשים אך זה לא משפיע על רמת האינטלגנציה",
    type: "negative"
  },
  {
    text: "תוכל ללמוד לפעול אחרת, אך את הדברים המהותיים שמאפיינים אותך אין באפשרותך לשנות",
    type: "negative"
  },
  {
    text: "בני האדם במהותם הם אנשים טובים, אך לעיתים הם מקבלים החלטות לא טובות",
    type: "positive"
  },
  {
    text: "אני אוהב ללמוד דברים חדשים",
    type: "positive"
  },
  {
    text: "אנשים חכמים באמת צריכים לעבוד פחות קשה",
    type: "negative"
  }
];

export default function MindsetQuestionnaire() {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [showError, setShowError] = useState(false);
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    
    const LandingPage = () => (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto my-8">
            <h1 className="text-2xl font-bold text-right mb-6">
                שאלון דפוס חשיבה מתפתח לציר המנטלי
            </h1>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="font-bold mb-4 text-right">
                    ברוכים הבאים לשאלון 'דפוס חשיבה מתפתח' שיתן לכם הצצה למוקד של הציר המנטלי בתוכנית ההייטק
                </p>
                
                <div className="space-y-4 text-right">
                    <p>
                        <strong>מטרת הציר המנטלי</strong> - לתת כלים לתלמידים לפתח תחושת מסוגלות וחוסן, 
                        וליצר תמונת עתיד מלאת אפשרויות והזדמנויות.
                    </p>
                    
                    <p>
                        התוכנית מקיימת מהלך שעוטף את התלמיד ומאפשר תהליך עמוק ומשמעותי 
                        עבור התלמיד.ה לפני בחירתו והמשכו לבגרות טק.
                    </p>
                </div>
            </div>

            <div className="text-right">
                <p className="font-bold text-xl mb-4">רוצים להכיר את דפוס המחשבה שלכם?</p>
                <p className="mb-8">
                    ענו על השאלון שיעזור לכם להבין טוב יותר כיצד אתם מתייחסים ללמידה, כישלונות והצלחה.
                </p>
                
                <button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition-colors"
                    onClick={() => setShowQuestionnaire(true)}
                >
                    התחל שאלון
                </button>
            </div>
        </div>
    );

    if (!showQuestionnaire) {
        return <LandingPage />;
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto my-8">
            <h1 className="text-2xl font-bold text-right mb-8">שאלון דפוס חשיבה</h1>
            
            <div className="space-y-8">
                {questions.map((question, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="text-right font-medium mb-4">
                            {index + 1}. {question.text}
                        </div>
                        <div className="flex flex-row-reverse gap-8">
                            {[
                                { value: "0", label: "מסכים מאוד" },
                                { value: "1", label: "מסכים" },
                                { value: "2", label: "לא מסכים" },
                                { value: "3", label: "מאוד לא מסכים" }
                            ].map((option) => (
                                <label key={option.value} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option.value}
                                        checked={answers[index]?.toString() === option.value}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {showError && (
                    <div className="text-right text-red-500 font-medium">
                        נא לענות על כל השאלות (נותרו {questions.length - Object.keys(answers).length} שאלות)
                    </div>
                )}

                <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    onClick={calculateScore}
                >
                    חשב תוצאה
                </button>

                {score !== null && (
                    <div className="bg-gray-50 rounded-lg p-6 text-right">
                        <p className="font-bold text-lg mb-2">ציון כולל: {score}</p>
                        <p className="text-gray-700">{getResult(score)}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
