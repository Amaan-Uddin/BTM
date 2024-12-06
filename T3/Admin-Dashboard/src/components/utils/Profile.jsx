import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Profile({ src, className }) {
	return (
		<Avatar className={className}>
			<AvatarImage src={src} className={`object-cover`} />
			<AvatarFallback>Admin</AvatarFallback>
		</Avatar>
	)
}
export default Profile
