import React from 'react';

const TopPage = () => {
  return (
    <div className="bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <img 
              src="/GLA_University_logo.png" 
              alt="GLA University Logo" 
              className="h-32 w-auto"
            />
            <div className="w-px h-28 bg-border/50"></div>
            <img 
              src="/IUCCA_Logo[1].png" 
              alt="IUCAA Logo" 
              className="h-36 w-auto"
            />
          </div>
          <div className="hidden md:block text-right">
            <p className="text-muted-foreground text-lg font-medium">
              Organized by
            </p>
            <p className="text-foreground font-semibold text-xl">
              IUCAA Centre for Astronomy Research and Development (ICARD), <br />GLA University, Mathura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
