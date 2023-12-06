import Image from "next/image";

export default function Profile() {
  return (
    <div id="profile">
      <img src="/assets/avatar2.webp" alt="Logo de Esclerose" loading="lazy" />
      <p>@esclerosepunk</p>
    </div>
  );
}
