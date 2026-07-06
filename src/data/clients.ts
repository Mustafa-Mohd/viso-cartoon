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
  { name: "Saudi Electricity Company", industry: "Power Utility", url: "https://www.se.com.sa", icon: "⚡", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQBPXjfuMgyk-qk4HYwUV6Nqoow9m2v1bcg0w8EmU0g&s=10" },
  { name: "SAMA — Saudi Central Bank", industry: "Government / Financial", url: "https://www.sama.gov.sa", icon: "🏛️", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeACr-npEJ7qJBspklNVqFC5R5KARmTbwPkMnP_YfNA&s=10" },
  { name: "Ma'aden", industry: "Mining", url: "https://www.maaden.com.sa", icon: "⛏️", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t0oHVDm1CwpuXnOmlaeXuDZYfh086OMKeZEiAgQcHgvGRltQVwus7Ds&s=10" },
  { name: "SATORP", industry: "Refinery", url: "https://www.satorp.com", icon: "🛢️", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbEov-RjJ7flJ9dun73ZxEtb1OdMyLBrA8KhnodR-4w&s=10" },
  { name: "MARAFIQ", industry: "Utilities", url: "https://www.marafiq.com.sa", icon: "🔌", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbEov-RjJ7flJ9dun73ZxEtb1OdMyLBrA8KhnodR-4w&s=10" },
  { name: "ACWA Power", industry: "Power & Water", url: "https://www.acwapower.com", icon: "💡", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbEov-RjJ7flJ9dun73ZxEtb1OdMyLBrA8KhnodR-4w&s=10" },
  { name: "Saudi Chemical Company", industry: "Defense & Chemicals", url: "https://www.scct.com.sa", icon: "🧪", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbEov-RjJ7flJ9dun73ZxEtb1OdMyLBrA8KhnodR-4w&s=10" },
  { name: "Amazon", industry: "E-commerce", url: "https://www.amazon.sa", icon: "📦", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwUGMThSMYygZoRtiJEmrL-06o0HboKs5IdnHgn73Sg&s=10" },
  { name: "Ritz-Carlton", industry: "Hospitality", url: "https://www.ritzcarlton.com", icon: "🏨", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ0U-1DcvkrrrlGK85fW2WzVj4209qQyiprFnHa1pPg&s=10" },
  { name: "Jotun", industry: "Paints", url: "https://www.jotun.com", icon: "🎨", logoUrl: "https://logo.clearbit.com/jotun.com" },
  { name: "ROSHN", industry: "Real Estate", url: "https://www.roshn.sa", icon: "🏘️", logoUrl: "https://logo.clearbit.com/roshn.sa" },
  { name: "Red Sea Global", industry: "Mega Project", url: "https://www.redseaglobal.com", icon: "🌊", logoUrl: "https://logo.clearbit.com/redseaglobal.com" },
  { name: "Royal Commission for Jubail & Yanbu", industry: "Government", url: "https://www.rcjy.gov.sa", icon: "🏛️", logoUrl: "https://logo.clearbit.com/rcjy.gov.sa" },
  { name: "Red Sea International", industry: "Construction", url: "https://www.redseaintl.com", icon: "🏗️", logoUrl: "https://logo.clearbit.com/redseaintl.com" },
  { name: "Dammam Port", industry: "Port Authority", url: "https://mawani.gov.sa", icon: "⚓", logoUrl: "https://logo.clearbit.com/mawani.gov.sa" },
  { name: "Jeddah Islamic Port", industry: "Port", url: "https://mawani.gov.sa", icon: "🚢", logoUrl: "https://logo.clearbit.com/mawani.gov.sa" },
  { name: "Jazan Port", industry: "Port", url: "https://mawani.gov.sa", icon: "🛳️", logoUrl: "https://logo.clearbit.com/mawani.gov.sa" },
];
