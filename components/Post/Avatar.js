import Image from "next/image";

export default function Avatar({ name }) {
  return (
    <div className="flex align-center">
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
