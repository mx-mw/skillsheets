type SkillProps = {
	name: string,
	score: number
}

export default function Skill(props: SkillProps) {
	return <div className="
	border-beige 
	border-2 
	p-2 
	w-[100px] 
	h-[90px] 
	rounded-t-[5px] 
	rounded-b-xl 
	flex flex-col
	justify-center
	">
		<div className="uppercase text-sm font-bold text-center">
			{props.name}
		</div>
		<div className="text-3xl font-inter font-extrabold text-center" style={{
			fontFeatureSettings: '"cv09" on' 
		}}>
			{props.score}
		</div>
	</div>
}