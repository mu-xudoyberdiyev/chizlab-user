"use client";
import useMaterialStore from "@/lib/zustand";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function DetailsPage({ params }) {
  const router = useRouter();
  const { selectedMaterial } = useMaterialStore();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const storedMaterial = JSON.parse(localStorage.getItem("materialInfo"));
    if (storedMaterial) {
      setDetails(storedMaterial);
    } else if (selectedMaterial) {
      setDetails(selectedMaterial);
    }
  }, [selectedMaterial]);

  const handleBack = () => {
    router.push("/");
  };

  const handleViewSource = () => {
    window.open(details.source, "_blank");
  };

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen base-container p-6">
      <div className="max-w-[80%] mx-auto ">
        <button
          onClick={handleBack}
          className="mb-10 text-primary text-3xl hover:text-blue-700"
        >
          &larr; {details.title}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src={details.cover || "@/public/dark-logo.svg"}
              alt={details.title}
              width={500}
              height={800}
              className="rounded-br-[30px] rounded-lg"
              priority
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <h2 className="text-2xl ">
                Mualliflar: {details.authors.join(" , ")}
              </h2>
              <div className="flex flex-wrap max-w-[70%] gap-4 ">
                <Badge className="bg-white text-black rounded-xl text-base sm:text-lg font-medium ">
                  Resurs turi : {details.resourceType}
                </Badge>
                <Badge className="bg-white text-black  rounded-xl text-base sm:text-lg font-medium">
                  Resurs tili : {details.language}
                </Badge>
                <Badge className="bg-white text-black  rounded-xl text-base sm:text-lg font-medium">
                  Resurs bo'limi : {details.title}
                </Badge>
                <Badge className="bg-white text-black  rounded-xl text-base sm:text-lg font-medium">
                  Nashr yili : {details.publishedAt}
                </Badge>
                <Badge className="bg-white text-black px-3 py-2 rounded-xl text-base sm:text-lg font-medium">
                  Sahifalar soni : {details.volume}
                </Badge>
                <Badge className="bg-white text-black  rounded-xl text-base sm:text-lg font-medium">
                  Davlat : {details.country}
                </Badge>
                <Badge className="bg-white text-black  rounded-xl   text-base sm:text-lg font-medium">
                  Kalit so'zlar : {details.keywords.join(", ")}
                </Badge>
              </div>
              <p className="sm:text-2xl text-base text-expensive-green ">
                {details.summary}
              </p>
            </div>
            <button
              onClick={handleViewSource}
              className="mt-6 bg-expensive-green text-white px-4 py-2 rounded-lg hover:opacity-70"
            >
              Ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
