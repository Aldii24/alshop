import Image from "next/image";
import Link from "next/link";
import { auth } from "../auth";

const Profile = async () => {
  const session = await auth();
  console.log(session);

  return (
    <Link href={`/profile/${session?.user?.id}`}>
      <Image
        className="profile-image"
        src={`${session?.user?.image}`}
        width={40}
        height={40}
        alt={session?.user?.name || ""}
      />
    </Link>
  );
};

export default Profile;
