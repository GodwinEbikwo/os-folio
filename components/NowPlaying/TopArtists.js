// import React from "react";
// import Fetcher from "@lib/fetcher";
// import useSWR from "swr";
// import Image from "next/image";

// export default function TopArtists() {
//   const { data, error } = useSWR("/api/top-artists", Fetcher);

//   if (error) return <span>error don happen</span>;
//   console.log("top artists");
//   console.log(data);
//   console.log("top artists");
//   return (
//     <div>
//       <h1>
//         {data.items.map((item) => (
//           <ul key={item.id}>
//             <li>{item.name}</li>
//           </ul>
//         ))}
//       </h1>
//     </div>
//   );
// }
