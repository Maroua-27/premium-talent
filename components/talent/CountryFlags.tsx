import Image from "next/image";

interface Country {
  name: string;
  flag: string;
}

interface CountryFlagsProps {
  countries: Country[];
}

export default function CountryFlags({
  countries,
}: CountryFlagsProps) {
  return (
    <div className="flex items-center gap-2">
      {countries.map((country) => (
        <Image
          key={country.name}
          src={country.flag}
          alt={country.name}
          width={24}
          height={18}
          className="rounded-sm border"
        />
      ))}
    </div>
  );
}