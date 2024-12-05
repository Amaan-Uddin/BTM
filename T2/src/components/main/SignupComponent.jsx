import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/label'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Link } from 'react-router'

function SignupComponent({ children }) {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className="tw-rounded-lg">
				<Card className=" tw-border-0 tw-shadow-none">
					<CardHeader>
						<CardTitle className="tw-text-2xl">Register</CardTitle>
					</CardHeader>
					<CardContent>
						<form>
							<div className="tw-grid tw-w-full tw-items-center tw-gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" placeholder="Email Address" />
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" placeholder="Password" />
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="tw-flex tw-justify-between">
						<Button className="tw-bg-yellow-300">Register</Button>
						<Link className="tw-text-yellow-300">Already have an account?</Link>
					</CardFooter>
				</Card>
			</DialogContent>
		</Dialog>
	)
}
export default SignupComponent
