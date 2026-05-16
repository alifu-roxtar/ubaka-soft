// components/WorkingArea.jsx - Dark Developer Theme
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { 
  FaMapMarkerAlt, FaCheckCircle, FaGlobe, FaBuilding, 
  FaUsers, FaChartLine, FaTerminal, FaCity, FaFlag
} from 'react-icons/fa';

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WorkingArea = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const africanCountries = [
    { 
      name: 'Rwanda', 
      status: 'active', 
      cities: ['Kigali', 'Musanze', 'Huye', 'Rubavu'],
      projects: 45,
      clients: 120,
      since: '2021',
      coordinates: [-1.9441, 30.0619],
      flag: '🇷🇼'
    },
    { 
      name: 'Kenya', 
      status: 'active', 
      cities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'],
      projects: 38,
      clients: 95,
      since: '2021',
      coordinates: [-1.2864, 36.8172],
      flag: '🇰🇪'
    },
    { 
      name: 'Uganda', 
      status: 'active', 
      cities: ['Kampala', 'Entebbe', 'Gulu', 'Jinja'],
      projects: 28,
      clients: 72,
      since: '2022',
      coordinates: [0.3136, 32.5811],
      flag: '🇺🇬'
    },
    { 
      name: 'Tanzania', 
      status: 'active', 
      cities: ['Dar es Salaam', 'Arusha', 'Zanzibar', 'Mwanza'],
      projects: 32,
      clients: 85,
      since: '2022',
      coordinates: [-6.7924, 39.2083],
      flag: '🇹🇿'
    },
    { 
      name: 'Nigeria', 
      status: 'active', 
      cities: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano'],
      projects: 52,
      clients: 145,
      since: '2021',
      coordinates: [6.5244, 3.3792],
      flag: '🇳🇬'
    },
    { 
      name: 'Ghana', 
      status: 'active', 
      cities: ['Accra', 'Kumasi', 'Takoradi', 'Tamale'],
      projects: 24,
      clients: 58,
      since: '2022',
      coordinates: [5.6037, -0.1870],
      flag: '🇬🇭'
    },
    { 
      name: 'South Africa', 
      status: 'active', 
      cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'],
      projects: 41,
      clients: 108,
      since: '2022',
      coordinates: [-26.2041, 28.0473],
      flag: '🇿🇦'
    },
    { 
      name: 'Egypt', 
      status: 'active', 
      cities: ['Cairo', 'Alexandria', 'Giza', 'Luxor'],
      projects: 19,
      clients: 45,
      since: '2023',
      coordinates: [30.0444, 31.2357],
      flag: '🇪🇬'
    },
    { 
      name: 'Morocco', 
      status: 'active', 
      cities: ['Casablanca', 'Rabat', 'Marrakech', 'Fes'],
      projects: 16,
      clients: 38,
      since: '2023',
      coordinates: [33.5731, -7.5898],
      flag: '🇲🇦'
    },
    { 
      name: 'Ethiopia', 
      status: 'active', 
      cities: ['Addis Ababa', 'Dire Dawa', 'Gondar', 'Bahir Dar'],
      projects: 22,
      clients: 52,
      since: '2022',
      coordinates: [9.0320, 38.7469],
      flag: '🇪🇹'
    },
    { 
      name: 'Senegal', 
      status: 'active', 
      cities: ['Dakar', 'Thies', 'Saint-Louis', 'Ziguinchor'],
      projects: 14,
      clients: 32,
      since: '2023',
      coordinates: [14.7167, -17.4677],
      flag: '🇸🇳'
    },
    { 
      name: 'Ivory Coast', 
      status: 'active', 
      cities: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'Daloa'],
      projects: 18,
      clients: 42,
      since: '2023',
      coordinates: [5.3600, -4.0083],
      flag: '🇨🇮'
    },
  ];

  const totalStats = {
    countries: africanCountries.length,
    projects: africanCountries.reduce((sum, c) => sum + c.projects, 0),
    clients: africanCountries.reduce((sum, c) => sum + c.clients, 0),
    coverage: 'East, West, South & North Africa'
  };

  const africaBounds = [[-35, -20], [37, 55]];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">working_area --map</span>
              <span className="text-green-400 text-sm ml-2">● {totalStats.countries} countries active</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaGlobe className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Our Working Area</h1>
            </div>
            <p className="text-xl text-white/90">Serving clients across the African continent</p>
          </div>
        </div>
      </div>

      {/* Stats Terminal */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-xl">
          <div className="flex items-center space-x-4 text-gray-400 mb-3">
            <span className="text-green-400">$</span>
            <span className="font-mono text-sm">./africa_stats.sh --all</span>
            <span className="text-blue-400 animate-pulse">▊</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-900/50 rounded-lg">
              <FaFlag className="text-2xl text-green-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">{totalStats.countries}+</div>
              <div className="text-xs text-gray-400">Countries</div>
            </div>
            <div className="text-center p-3 bg-gray-900/50 rounded-lg">
              <FaChartLine className="text-2xl text-blue-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">{totalStats.projects}+</div>
              <div className="text-xs text-gray-400">Active Projects</div>
            </div>
            <div className="text-center p-3 bg-gray-900/50 rounded-lg">
              <FaUsers className="text-2xl text-purple-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">{totalStats.clients}+</div>
              <div className="text-xs text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center p-3 bg-gray-900/50 rounded-lg">
              <FaBuilding className="text-2xl text-orange-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">4+</div>
              <div className="text-xs text-gray-400">Regional Hubs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-mono text-sm flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-400" />
                ./africa_coverage_map
              </h3>
            </div>
            <div className="h-96 w-full">
              <MapContainer 
                bounds={africaBounds} 
                style={{ height: '100%', width: '100%' }}
                zoomControl={true}
                scrollWheelZoom={true}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CartoDB'
                />
                {africanCountries.map((country, idx) => (
                  <React.Fragment key={idx}>
                    <Circle
                      center={country.coordinates}
                      radius={200000}
                      pathOptions={{ color: '#10b981', fillColor: '#10b981', fillOpacity: 0.2 }}
                    />
                    <Marker 
                      position={country.coordinates}
                      eventHandlers={{
                        click: () => setSelectedCountry(country)
                      }}
                    >
                      <Popup>
                        <div className="text-center p-2">
                          <p className="font-bold text-gray-900">{country.flag} {country.name}</p>
                          <p className="text-sm text-gray-600">Projects: {country.projects}</p>
                          <p className="text-sm text-gray-600">Clients: {country.clients}</p>
                        </div>
                      </Popup>
                    </Marker>
                  </React.Fragment>
                ))}
              </MapContainer>
            </div>
            <div className="p-4 bg-gray-900/50 border-t border-gray-700">
              <p className="text-xs text-gray-400 font-mono">
                Map shows active operational presence across {totalStats.countries} African countries
              </p>
            </div>
          </div>

          {/* Countries List */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-mono text-sm flex items-center gap-2">
                <FaTerminal className="text-green-400" />
                ./countries_list --active
              </h3>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {africanCountries.map((country, idx) => (
                <div 
                  key={idx}
                  className={`p-4 border-b border-gray-700 hover:bg-gray-700/50 transition cursor-pointer ${
                    selectedCountry?.name === country.name ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-green-500 text-xl animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <h4 className="font-bold text-white">{country.name}</h4>
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Active</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {country.cities.map((city, cIdx) => (
                            <span key={cIdx} className="text-xs text-gray-400 flex items-center gap-1">
                              <FaCity className="text-[10px]" />
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{country.projects} projects</div>
                      <div className="text-xs text-gray-400">{country.clients} clients</div>
                      <div className="text-xs text-green-400 mt-1">since {country.since}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expansion Plans */}
        <div className="mt-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30">
          <div className="text-center mb-6">
            <FaGlobe className="text-4xl text-green-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white font-mono">Expansion Roadmap</h3>
            <p className="text-gray-400">Coming to more African nations in 2025</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-yellow-500 font-bold mb-2">Q1 2025</div>
              <p className="text-white">Cameroon</p>
              <p className="text-gray-400 text-sm">Central Africa Hub</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-yellow-500 font-bold mb-2">Q2 2025</div>
              <p className="text-white">Zambia & Zimbabwe</p>
              <p className="text-gray-400 text-sm">Southern Expansion</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-yellow-500 font-bold mb-2">Q3 2025</div>
              <p className="text-white">Angola & Mozambique</p>
              <p className="text-gray-400 text-sm">Lusophone Market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingArea;