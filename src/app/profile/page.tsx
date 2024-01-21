import Image from "next/image";
import ProfileImage from '../../../public/image.jpg'
export default function Profile(){
	return(
		<>
			<h1>My Profile</h1>
			<Image src={ProfileImage} alt='My profile' width={500} height={500}/>
		</>
	)
}