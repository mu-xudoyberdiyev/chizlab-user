"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import useMaterialStore from "@/lib/zustand";

export default function MaterialCard({ info }) {
  const router = useRouter();
  const { setSelectedMaterial } = useMaterialStore();
  const { cover, title, summary, id } = info;

  const handleCardClick = () => {
    localStorage.setItem("materialInfo", JSON.stringify(info));
    setSelectedMaterial(info);
    router.push(`/details/${id}`);
  };

  return (
    <Card className="overflow-hidden cursor-pointer" onClick={handleCardClick}>
      <div className="bg-primary-foreground">
        <Image
          className="object-cover w-full"
          alt={title}
          src={cover}
          width={230}
          height={325}
          priority
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{summary}</CardDescription>
      </CardHeader>
    </Card>
  );
}
