'use client';

import { useMemo, useState } from 'react';
import { useEnquiry } from './ClientProviders';

type Answers = { destination?: string; duration?: string; travelers?: string; style?: string; comfort?: string; beach?: string };
const steps = [
  { key: 'destination', title: 'Where are you most interested in going?', choices: ['Kenya', 'Tanzania', 'Kenya + Tanzania', 'Not sure yet'] },
  { key: 'duration', title: 'How long do you want the trip to be?', choices: ['5–7 days', '8–10 days', '11–14 days', '15+ days'] },
  { key: 'travelers', title: 'Who is traveling?', choices: ['Couple', 'Family', 'Friends / group', 'Solo traveler'] },
  { key: 'style', title: 'What matters most?', choices: ['Wildlife intensity', 'Luxury & comfort', 'Migration timing', 'Photography', 'Culture & landscape', 'A balanced mix'] },
  { key: 'comfort', title: 'What comfort level feels right?', choices: ['Midrange', 'Luxury', 'Ultra Luxury', 'Open to recommendations'] },
  { key: 'beach', title: 'Would you like a beach finish?', choices: ['Safari only', 'Kenyan coast', 'Zanzibar', 'Maybe — show me the trade-off'] },
] as const;

export function SafariBuilder() {
  const [index, setIndex] = useState(0); const [answers, setAnswers] = useState<Answers>({}); const { openEnquiry } = useEnquiry();
  const current = steps[index]; const complete = index >= steps.length;
  const summary = useMemo(() => Object.entries(answers).map(([key,value]) => `${key}: ${value}`).join(' · '), [answers]);
  function choose(value:string){setAnswers((prev)=>({...prev,[current.key]:value}));setIndex((prev)=>prev+1);}
  if(complete)return <div className="builder"><div className="prose-card"><p className="eyebrow">Your safari brief</p><h2>That is enough to start a useful conversation.</h2><p>{summary}</p><p>We have intentionally not produced a fake “instant itinerary.” Route quality depends on dates, current availability and the transfer trade-offs behind your choices.</p><div className="hero-actions"><button className="button primary" onClick={()=>openEnquiry({type:`Safari builder · ${summary}`,destination:answers.destination})}>Send this brief to a planner</button><button className="button secondary" onClick={()=>{setIndex(0);setAnswers({})}}>Start again</button></div></div></div>;
  return <div className="builder"><div className="builder-progress">{steps.map((_,step)=><span key={step} className={step<=index?'active':''}/>)}</div><div className="prose-card"><p className="eyebrow">Question {index+1} of {steps.length}</p><h2>{current.title}</h2><div className="choice-grid">{current.choices.map((choice)=><button className="choice" key={choice} onClick={()=>choose(choice)}>{choice}</button>)}</div>{index>0?<button className="button secondary" style={{marginTop:18}} onClick={()=>setIndex((prev)=>prev-1)}>← Back</button>:null}</div></div>;
}
