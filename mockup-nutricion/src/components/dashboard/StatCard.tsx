export const StatCard = ({ label, value, gradient }) => (
  <div className={`bg-gradient-to-br ${gradient} p-6 rounded-[2rem] text-white shadow-lg shadow-blue-200/40`}>
    <p className="text-white/80 text-sm font-medium">{label}</p>
    <h3 className="text-3xl font-bold mt-1">{value}</h3>
  </div>
);