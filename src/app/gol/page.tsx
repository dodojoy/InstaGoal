import Header from "@/components/Header";
import MatchDetails from "@/components/MatchDetails";
import Select from "@/components/Select";
import TabsComponent from "@/components/Tabs";
import Title from "@/components/Title";

export default function GolPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title title="Gol" />
        <Select />
      </div>
    </>
  );
}
