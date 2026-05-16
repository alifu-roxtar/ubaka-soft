// components/OrganizationCenter.jsx - Dark Developer Theme
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { 
  FaBuilding, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt,
  FaTerminal, FaUsers, FaCoffee, FaParking, FaWifi, FaShieldAlt,
  FaCalendarAlt, FaFlag, FaGlobe
} from 'react-icons/fa';

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const OrganizationCenter = () => {
  const kicukiroCoordinates = [-1.9784, 30.1047];
  
  const officeInfo = {
    name: 'UbakaSoft Headquarters',
    address: 'KG 123 Street, Kicukiro District',
    city: 'Kigali',
    country: 'Rwanda',
    zip: 'KG 123',
    phone: '+250 788 123 456',
    email: 'info@ubakasoft.com',
    hours: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      sunday: 'Closed'
    }
  };

  const amenities = [
    { icon: FaWifi, name: 'High-Speed Internet', desc: '1 Gbps fiber connection' },
    { icon: FaCoffee, name: 'Coffee Bar', desc: 'Free coffee & beverages' },
    { icon: FaParking, name: 'Secure Parking', desc: '24/7 monitored parking' },
    { icon: FaShieldAlt, name: 'Security', desc: '24/7 security service' },
    { icon: FaUsers, name: 'Meeting Rooms', desc: '4 modern meeting rooms' },
    { icon: FaCalendarAlt, name: 'Event Space', desc: 'Tech meetups & workshops' },
  ];

  const nearby = [
    { name: 'Kigali International Airport', distance: '15 min drive' },
    { name: 'Kigali Convention Centre', distance: '10 min drive' },
    { name: 'Kicukiro Market', distance: '5 min walk' },
    { name: 'Rwanda Innovation Fund', distance: '8 min drive' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">organization --center</span>
              <span className="text-green-400 text-sm ml-2">● headquarters</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaBuilding className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Organization Center</h1>
            </div>
            <p className="text-xl text-white/90">Our headquarters in the heart of Kigali, Rwanda</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <h3 className="text-xl font-bold text-white font-mono">Location</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">{officeInfo.name}</p>
                <p>{officeInfo.address}</p>
                <p>{officeInfo.city}, {officeInfo.country} {officeInfo.zip}</p>
                <div className="pt-3 mt-2 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-sm">
                    <FaFlag className="text-green-400" />
                    <span>East Africa Regional Hub</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <FaPhone className="text-green-400 text-2xl" />
                <h3 className="text-xl font-bold text-white font-mono">Contact</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+250788123456" className="text-white hover:text-blue-400 transition">
                      {officeInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:info@ubakasoft.com" className="text-white hover:text-blue-400 transition">
                      {officeInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a href="https://ubakasoft.com" className="text-white hover:text-blue-400 transition">
                      ubakasoft.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-blue-400 text-2xl" />
                <h3 className="text-xl font-bold text-white font-mono">Business Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-mono text-sm">{officeInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-mono text-sm">{officeInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-500 font-mono text-sm">{officeInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Amenities */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-white font-mono text-sm flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-400" />
                  ./location_map --kigali
                </h3>
              </div>
              <div className="h-80 w-full">
                <MapContainer 
                  center={kicukiroCoordinates} 
                  zoom={15} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CartoDB'
                  />
                  <Marker position={kicukiroCoordinates}>
                    <Popup>
                      <div className="text-center p-2">
                        <p className="font-bold text-gray-900">UbakaSoft HQ</p>
                        <p className="text-sm text-gray-600">Kicukiro, Kigali, Rwanda</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="p-4 bg-gray-900/50 border-t border-gray-700">
                <p className="text-xs text-gray-400 font-mono">
                  Location: Kicukiro District, Kigali - Heart of Rwanda's tech ecosystem
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <FaBuilding className="text-purple-400" />
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <amenity.icon className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-white text-sm font-semibold">{amenity.name}</p>
                      <p className="text-gray-400 text-xs">{amenity.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Locations */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white font-mono mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-400" />
                Nearby Locations
              </h3>
              <div className="space-y-3">
                {nearby.map((place, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                    <span className="text-gray-300">{place.name}</span>
                    <span className="text-green-400 text-sm font-mono">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visit CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center border border-purple-500/30">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <FaCoffee className="text-yellow-400" />
            <span className="text-sm font-mono text-gray-300">Visit our HQ</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Welcome to Our Space</h3>
          <p className="text-gray-400 mb-6">We'd love to meet you! Schedule a visit to our office</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Schedule Visit
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCenter;