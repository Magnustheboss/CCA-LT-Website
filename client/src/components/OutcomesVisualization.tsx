import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Survival data for pCCA and iCCA
const survivalData = [
  {
    year: "1-Year",
    pCCA: 85,
    iCCA: 78,
    HCC: 88,
  },
  {
    year: "3-Year",
    pCCA: 75,
    iCCA: 65,
    HCC: 80,
  },
  {
    year: "5-Year",
    pCCA: 68,
    iCCA: 58,
    HCC: 75,
  },
];

// Recurrence-free survival data
const recurrenceData = [
  {
    year: "1-Year",
    pCCA: 92,
    iCCA: 85,
    HCC: 90,
  },
  {
    year: "3-Year",
    pCCA: 82,
    iCCA: 70,
    HCC: 80,
  },
  {
    year: "5-Year",
    pCCA: 75,
    iCCA: 62,
    HCC: 75,
  },
];

// Outcome comparison data
const outcomeComparisonData = [
  {
    metric: "Protocol Adherence",
    pCCA: 95,
    iCCA: 88,
  },
  {
    metric: "R0 Resection",
    pCCA: 98,
    iCCA: 92,
  },
  {
    metric: "No Major Complications",
    pCCA: 78,
    iCCA: 82,
  },
  {
    metric: "Disease-Free at 1yr",
    pCCA: 92,
    iCCA: 85,
  },
];

const COLORS = {
  pCCA: "#0d9488",
  iCCA: "#14b8a6",
  HCC: "#2dd4bf",
};

export function SurvivalChart() {
  return (
    <div className="w-full h-96 bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-foreground mb-4">
        Overall Survival (OS) After Liver Transplantation
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={survivalData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" label={{ value: "Survival (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="pCCA"
            stroke={COLORS.pCCA}
            strokeWidth={3}
            dot={{ fill: COLORS.pCCA, r: 6 }}
            activeDot={{ r: 8 }}
            name="pCCA"
          />
          <Line
            type="monotone"
            dataKey="iCCA"
            stroke={COLORS.iCCA}
            strokeWidth={3}
            dot={{ fill: COLORS.iCCA, r: 6 }}
            activeDot={{ r: 8 }}
            name="iCCA"
          />
          <Line
            type="monotone"
            dataKey="HCC"
            stroke={COLORS.HCC}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: COLORS.HCC, r: 5 }}
            activeDot={{ r: 7 }}
            name="HCC (Reference)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RecurrenceFreeSurvivalChart() {
  return (
    <div className="w-full h-96 bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-foreground mb-4">
        Recurrence-Free Survival (RFS) After Liver Transplantation
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={recurrenceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" label={{ value: "RFS (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="pCCA"
            stroke={COLORS.pCCA}
            strokeWidth={3}
            dot={{ fill: COLORS.pCCA, r: 6 }}
            activeDot={{ r: 8 }}
            name="pCCA"
          />
          <Line
            type="monotone"
            dataKey="iCCA"
            stroke={COLORS.iCCA}
            strokeWidth={3}
            dot={{ fill: COLORS.iCCA, r: 6 }}
            activeDot={{ r: 8 }}
            name="iCCA"
          />
          <Line
            type="monotone"
            dataKey="HCC"
            stroke={COLORS.HCC}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: COLORS.HCC, r: 5 }}
            activeDot={{ r: 7 }}
            name="HCC (Reference)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function OutcomeComparisonChart() {
  return (
    <div className="w-full h-96 bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-foreground mb-4">
        Clinical Outcomes Comparison
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={outcomeComparisonData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="metric" stroke="#6b7280" angle={-45} textAnchor="end" height={100} />
          <YAxis stroke="#6b7280" label={{ value: "Rate (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend />
          <Bar dataKey="pCCA" fill={COLORS.pCCA} name="pCCA" radius={[8, 8, 0, 0]} />
          <Bar dataKey="iCCA" fill={COLORS.iCCA} name="iCCA" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SurvivalComparisonSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="medical-card">
        <h4 className="text-lg font-bold text-foreground mb-4">pCCA Outcomes</h4>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-secondary mb-1">1-Year OS</p>
            <p className="text-2xl font-bold text-accent">85%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year OS</p>
            <p className="text-2xl font-bold text-accent">68%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year RFS</p>
            <p className="text-2xl font-bold text-accent">75%</p>
          </div>
        </div>
      </div>

      <div className="medical-card">
        <h4 className="text-lg font-bold text-foreground mb-4">iCCA Outcomes</h4>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-secondary mb-1">1-Year OS</p>
            <p className="text-2xl font-bold text-accent">78%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year OS</p>
            <p className="text-2xl font-bold text-accent">58%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year RFS</p>
            <p className="text-2xl font-bold text-accent">62%</p>
          </div>
        </div>
      </div>

      <div className="medical-card">
        <h4 className="text-lg font-bold text-foreground mb-4">HCC Reference</h4>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-secondary mb-1">1-Year OS</p>
            <p className="text-2xl font-bold text-accent">88%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year OS</p>
            <p className="text-2xl font-bold text-accent">75%</p>
          </div>
          <div>
            <p className="text-sm text-secondary mb-1">5-Year RFS</p>
            <p className="text-2xl font-bold text-accent">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
