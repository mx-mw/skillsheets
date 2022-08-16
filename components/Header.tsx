import Row from "./Divider";

type HeaderProps = {

};

export default function Header(props: HeaderProps) {
	return <div className="flex flex-col mb-8">
		<div className="flex flex-row justify-between text-light text-3xl font-bold">
			<div className="mt-5">
				skillsheets
			</div>
			<div className="flex flex-row gap-5">
				<div className="flex flex-col">
					<div className="text-sm text-beige font-bold">
						name
					</div>
					<div className="text-light text-2xl font-bold">
						Max Morrow
					</div>
				</div>	
				<div className="flex flex-col">
					<div className="text-sm text-beige">
						species
					</div>
					<div className="text-light text-2xl font-bold">
						Backend Developer
					</div>
				</div>
			</div>
		</div>
		<Row />
	</div>
}