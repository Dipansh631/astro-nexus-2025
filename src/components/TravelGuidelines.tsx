import React from 'react';

const TravelGuidelines = () => {
  const guidelines = [
    { id: 1, affiliation: 'Bachelor/Masters\' students', entitlement: 'Train by second class sleeper (Non-AC) by the direct shortest route' },
    { id: 2, affiliation: 'Ph.D. students', entitlement: 'Train by AC-3 tier by the direct shortest route' },
    { id: 3, affiliation: 'Post-Doctoral Fellows', entitlement: 'Train by AC-3 tier by the direct shortest route' },
    { id: 4, affiliation: 'Senior Visitors', entitlement: 'Train by AC-2 tier by the direct shortest route' },
    { id: 5, affiliation: 'Visiting Associates of IUCAA', entitlement: 'Air travel by economy class – justification for invitation must be provided' },
  ];

  return (
    <section id="travel-guidelines" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Travel <span className="bg-gradient-cosmic bg-clip-text text-transparent">Guidelines</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IUCAA Guidelines related to travel entitlement
          </p>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary/10 to-primary/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-orbitron font-semibold text-foreground/90 uppercase tracking-wider">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-orbitron font-semibold text-foreground/90 uppercase tracking-wider">
                    Affiliation
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-orbitron font-semibold text-foreground/90 uppercase tracking-wider">
                    Travel Entitlement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {guidelines.map((item) => (
                  <tr key={item.id} className="hover:bg-background/70 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      {item.id}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground font-medium">
                      {item.affiliation}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.entitlement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Please note that all travel must be by the direct shortest route.</p>
          <p className="mt-2">For any queries regarding travel entitlements, please contact the organizing committee.</p>
        </div>
      </div>
    </section>
  );
};

export default TravelGuidelines;
