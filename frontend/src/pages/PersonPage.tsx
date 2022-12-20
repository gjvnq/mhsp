import { useParams } from "react-router";

export default function PersonPage() {
  const params = useParams();
  return <p>Person page: {params.person}</p>;
}
