import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-right text-2xl mb-6">
          שאלון דפוס חשיבה מתפתח לציר המנטלי
        </CardTitle>
      </CardHeader>
      <CardContent dir="rtl" className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <p className="font-bold text-right">
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

        <div className="text-right mt-8">
          <p className="font-bold text-xl mb-4">רוצים להכיר את דפוס המחשבה שלכם?</p>
          <p className="mb-8">
            ענו על השאלון שיעזור לכם להבין טוב יותר כיצד אתם מתייחסים ללמידה, כישלונות והצלחה.
          </p>
          
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 w-full text-lg py-6"
            onClick={() => setShowQuestionnaire(true)}
          >
            התחל שאלון
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: parseInt(value)
    }));
    setShowError(false);
  };

  const calculateQuestionScore = (questionType, answerValue) => {
    return questionType === 'positive' ? 3 - answerValue : answerValue;
  };

  const calculateScore = () => {
    if (Object.keys(answers).length !== questions.length) {
      setShowError(true);
      return;
    }

    const total = Object.entries(answers).reduce((sum, [index, value]) => {
      const questionType = questions[parseInt(index)].type;
      return sum + calculateQuestionScore(questionType, value);
    }, 0);

    setScore(total);
    setShowError(false);
  };

  const getResult = (score) => {
    if (score <= 20) return "דפוס חשיבה מקובע: חזק";
    if (score <= 33) return "דפוס חשיבה מתפתח: מתון";
    if (score <= 44) return "דפוס חשיבה מקובע: מתון";
    return "דפוס חשיבה מתפתח: חזק";
  };

  const getUnansweredQuestions = () => {
    return questions.length - Object.keys(answers).length;
  };

  if (!showQuestionnaire) {
    return <LandingPage />;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-right text-xl">שאלון דפוס חשיבה</CardTitle>
      </CardHeader>
      <CardContent dir="rtl">
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="space-y-2">
              <div className="font-medium">
                {index + 1}. {question.text}
              </div>
              <RadioGroup
                className="flex justify-end space-x-8"
                onValueChange={(value) => handleAnswerChange(index, value)}
                value={answers[index]?.toString()}
              >
                {[
                  { value: "0", label: "מסכים מאוד" },
                  { value: "1", label: "מסכים" },
                  { value: "2", label: "לא מסכים" },
                  { value: "3", label: "מאוד לא מסכים" }
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <label className="text-sm ml-2">{option.label}</label>
                    <RadioGroupItem value={option.value} />
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          {showError && (
            <div className="text-right text-red-500 font-medium">
              נא לענות על כל השאלות (נותרו {getUnansweredQuestions()} שאלות)
            </div>
          )}

          <Button 
            className="w-full mt-6"
            onClick={calculateScore}
          >
            חשב תוצאה
          </Button>

          {score !== null && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right">
              <p className="font-bold">ציון כולל: {score}</p>
              <p className="mt-2">{getResult(score)}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}