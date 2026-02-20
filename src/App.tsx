import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Letter from './components/Letter';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Reasons from './components/Reasons';
import Closing from './components/Closing';
import Footer from './components/Footer';
import SectionTransition from './components/LetterToTimelineTransition.tsx';
import TimelineToGalleryTransition from './components/TimelineToGalleryTransition.tsx';
import MemoriesToReasonsTransition from './components/MemoriesToReasonsTransition.tsx';


function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
}

function StoryPage() {
  return (
    <div className="overflow-x-hidden">
      <Letter />
      <SectionTransition />
      <Timeline />
      <TimelineToGalleryTransition />
      <Gallery />
      <MemoriesToReasonsTransition />
      <Reasons />
      <Closing />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/story" element={<StoryPage />} />
    </Routes>
  );
}
