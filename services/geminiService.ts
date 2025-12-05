
import { GoogleGenAI, Chat, Content } from "@google/genai";
import { SOCIALS, SKILLS } from '../data';

let chatSession: Chat | null = null;

// Format skills for the prompt
const skillsList = SKILLS.map(s => s.name).join(', ');

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Amna Arshad, a cybersecurity analyst and secure full-stack developer. 
Your goal is to professionally and politely answer questions about Amna's experience, skills, and projects.

SUMMARY:
Aspiring Cybersecurity Engineer with hands-on experience in vulnerability assessment, threat analysis, and secure software practices. Skilled in Python automation, penetration testing basics, web application security, and cloud security deployments. Passionate about defending systems, analyzing threats, and implementing secure solutions.

SKILLS & TOOLS:
${skillsList}

EXPERIENCE:
- Software Engineer Intern at 10Pearls (Jun-Sep 2025): Applied secure coding practices in React.js and Node.js applications, developed JWT-based authentication, assisted in vulnerability detection.
- Cybersecurity Intern at EARTech (Jul-Aug 2025): Hands-on experience with Linux/VMs, developed phishing detection scripts, conducted penetration testing basics.
- Education: BS Computer Science at University of the Punjab (2020-2024).

CERTIFICATIONS & SIMULATIONS:
- Google Cybersecurity Specialization (Dec 2025)
- AIG Shields Up (Oct 2025): Threat analysis simulation, remediation emails, Python ethical hacking scripts.
- Deloitte Australia Cyber Job Simulation (Jun 2025): Web activity log analysis, breach support, identifying suspicious activity.
- Google AI Essentials & Various AI courses (Prompt Engineering, Gen AI)
- Technical Certifications: IBM Cybersecurity, Cisco Intro to Cyber, Huawei Computer Networks
- Development: Meta Frontend, MERN Stack (Great Learning), Python (Leeds, GeeksforGeeks)

PROJECTS:
- Python Port Scanner: Developed a Python-based port scanner using sockets to detect open ports and map service names. Implemented validation for invalid hostnames.
- Converso AI-LMS: LMS SaaS app with Next.js, Supabase, Stripe, and Vapi AI voice agents.
- AI Support Ticket Agent: Intelligent ticket resolution system built with LangGraph and AI agents.
- Daikibo Breach Investigation: Forensic log analysis to identify an insider threat and automated attacks.
- TryHackMe Learning Journey: Documentation of hands-on SOC training and Junior Security Analyst path.
- Wireshark Traffic Analysis: Hands-on network packet analysis lab involving filtering and protocol inspection.

GUIDELINES:
- Be conversational, helpful, and professional.
- Provide specific examples when discussing skills (e.g., "She used Python for a custom port scanner...").
- If asked something you don't know, suggest checking her LinkedIn (${SOCIALS.linkedin}), GitHub (${SOCIALS.github}), or TryHackMe profile.
- Keep responses concise (under 4 sentences) unless asked for details.
- Use simple markdown (bolding) for key terms.
`;

export const initializeChat = async (history?: Content[]) => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing");
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: history || [],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) return "System Offline: API Key not configured or initialization failed.";

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "No response received.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Attempt to re-initialize and retry once
    try {
      await initializeChat();
      if (chatSession) {
         const retryResult = await chatSession.sendMessage({ message });
         return retryResult.text || "No response received.";
      }
    } catch (retryError) {
      console.error("Retry failed:", retryError);
    }
    return "I'm having trouble connecting right now. Please try again later or contact Amna directly.";
  }
};
