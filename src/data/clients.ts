export type Client = {
  name: string;
  industry: string;
  url: string;
  /** Single emoji glyph used as the cartoon illustration. */
  icon: string;
  /** External image URL for the company's real logo. */
  logoUrl?: string;
};

export const clients: Client[] = [
  { name: "Saudi Aramco", industry: "Oil & Gas", url: "https://www.aramco.com", icon: "🛢️", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81oSbqxfsrJaGEow_lU2loRpt3wOSxLP5It3YjsLg5g&s=10" },
  { name: "NEOM", industry: "Mega Project", url: "https://www.neom.com", icon: "🏙️", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCByBXx-wiNZDQ3jFs-6MkEgkFkicCqEMhoqZwog7j-Q&s=10" },
  { name: "National Water Company", industry: "Water Utility", url: "https://www.nwc.com.sa", icon: "💧", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0E6dJV_ZtDR25gTPsdPc4aiQNg71Kre_Is9P8ngcb9Q&s=10" },
  { name: "Saudi Electricity Company", industry: "Power Utility", url: "https://www.se.com.sa", icon: "⚡" },
  { name: "SAMA — Saudi Central Bank", industry: "Government / Financial", url: "https://www.sama.gov.sa", icon: "🏛️" },
  { name: "Ma'aden", industry: "Mining", url: "https://www.maaden.com.sa", icon: "⛏️" },
  { name: "SATORP", industry: "Refinery", url: "https://www.satorp.com", icon: "🛢️" },
  { name: "MARAFIQ", industry: "Utilities", url: "https://www.marafiq.com.sa", icon: "🔌" },
  { name: "ACWA Power", industry: "Power & Water", url: "https://www.acwapower.com", icon: "💡" },
  { name: "Saudi Chemical Company", industry: "Defense & Chemicals", url: "https://www.scct.com.sa", icon: "🧪" },
  { name: "Amazon", industry: "E-commerce", url: "https://www.amazon.sa", icon: "📦" },
  { name: "Ritz-Carlton", industry: "Hospitality", url: "https://www.ritzcarlton.com", icon: "🏨" },
  { name: "Jotun", industry: "Paints", url: "https://www.jotun.com", icon: "🎨" },
  { name: "ROSHN", industry: "Real Estate", url: "https://www.roshn.sa", icon: "🏘️" },
  { name: "Red Sea Global", industry: "Mega Project", url: "https://www.redseaglobal.com", icon: "🌊" },
  { name: "Royal Commission for Jubail & Yanbu", industry: "Government", url: "https://www.rcjy.gov.sa", icon: "🏛️" },
  { name: "Red Sea International", industry: "Construction", url: "https://www.redseaintl.com", icon: "🏗️" },
  { name: "Dammam Port", industry: "Port Authority", url: "https://mawani.gov.sa", icon: "⚓" },
  { name: "Jeddah Islamic Port", industry: "Port", url: "https://mawani.gov.sa", icon: "🚢" },
  { name: "Jazan Port", industry: "Port", url: "https://mawani.gov.sa", icon: "🛳️" },
];
