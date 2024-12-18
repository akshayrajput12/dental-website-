import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  Shield, 
  Stethoscope, 
  Zap, 
  Heart, 
  Star, 
  Sparkles, 
  Leaf 
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
  service: Service;
}

const AnimatedIcon: React.FC<{ 
  Icon: React.ComponentType<{ className?: string }>, 
  className?: string 
}> = ({ Icon, className }) => (
  <div className="group">
    <Icon className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`} />
  </div>
);

const ServiceFeatureCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}> = ({ icon, title, description }) => (
  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-blue-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
    <div className="flex items-center mb-3">
      <div className="mr-4 text-blue-600 group-hover:text-blue-800 transition-colors">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-800 transition-colors">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
      {description}
    </p>
  </div>
);

export default function ServiceDetailModal({ 
  isOpen, 
  onClose, 
  onBookNow, 
  service 
}: ServiceDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'benefits'>('overview');

  if (!isOpen) return null;

  const tabs = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: (active: boolean) => (
        <AnimatedIcon 
          Icon={Stethoscope} 
          className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-600'}`} 
        />
      )
    },
    { 
      id: 'details', 
      label: 'Details', 
      icon: (active: boolean) => (
        <AnimatedIcon 
          Icon={Clock} 
          className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-600'}`} 
        />
      )
    },
    { 
      id: 'benefits', 
      label: 'Benefits', 
      icon: (active: boolean) => (
        <AnimatedIcon 
          Icon={Award} 
          className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-600'}`} 
        />
      )
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in overflow-y-auto"
    >
      <div 
        className="relative bg-white/90 backdrop-blur-xl rounded-3xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.01] perspective-1000 animate-slide-in-up border-4 border-blue-100"
      >
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/30 opacity-50 pointer-events-none"></div>

        {/* Service Image Section */}
        <div className="relative overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center mb-4 space-x-4">
              <service.icon className="h-12 w-12 text-blue-400 animate-pulse" />
              <h2 className="text-4xl font-bold text-shadow-lg">{service.title}</h2>
            </div>
            <p className="text-sm opacity-80 italic">{service.description}</p>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="p-8 flex flex-col relative z-10">
          {/* Tabs Navigation */}
          <div className="flex mb-8 bg-white/50 backdrop-blur-sm rounded-full p-1 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-blue-100'
                }`}
              >
                {tab.icon(activeTab === tab.id)}
                <span className="ml-2 text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-grow">
            {activeTab === 'overview' && (
              <div className="animate-fade-in space-y-4">
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
                <div className="flex space-x-3 items-center">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-spin-slow" />
                  <span className="text-gray-600 italic">
                    Personalized care tailored to your unique needs
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <ServiceFeatureCard 
                  icon={<Shield className="w-7 h-7" />}
                  title="Advanced Care"
                  description="Cutting-edge techniques and technology"
                />
                <ServiceFeatureCard 
                  icon={<Zap className="w-7 h-7" />}
                  title="Quick Treatment"
                  description="Efficient and time-saving procedures"
                />
                <ServiceFeatureCard 
                  icon={<Heart className="w-7 h-7" />}
                  title="Compassionate"
                  description="Caring approach with patient comfort"
                />
                <ServiceFeatureCard 
                  icon={<Star className="w-7 h-7" />}
                  title="Expert Care"
                  description="Highly skilled and experienced team"
                />
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="space-y-5 animate-fade-in">
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-blue-500 hover:border-blue-700 transition-all">
                  <div className="flex items-center mb-2">
                    <Leaf className="mr-3 text-green-500" />
                    <h4 className="font-semibold text-gray-800">Holistic Wellness</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comprehensive approach addressing overall health and well-being
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-green-500 hover:border-green-700 transition-all">
                  <div className="flex items-center mb-2">
                    <Heart className="mr-3 text-red-500" />
                    <h4 className="font-semibold text-gray-800">Long-Term Health</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Preventive strategies for sustained oral and overall health
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-purple-500 hover:border-purple-700 transition-all">
                  <div className="flex items-center mb-2">
                    <Star className="mr-3 text-yellow-500" />
                    <h4 className="font-semibold text-gray-800">Personalized Care</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Tailored treatments designed for your unique dental needs
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6 space-x-4">
            <button
              onClick={onBookNow}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 animate-pulse" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
