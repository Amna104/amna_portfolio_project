import React from 'react';

interface Props {
  title: string;
}

const SectionHeading: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-12 animate-fade-in-up">
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-cyan-200 to-cyan-400 pb-2 text-center tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent mt-4 opacity-50"></div>
    </div>
  );
};

export default SectionHeading;