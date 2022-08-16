import Image from 'next/image';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Header from '../components/Header'
import Skill from '../components/Skill'

function App() {
	return <div className="flex flex-col m-4">
		<Header />
		<div className='flex flex-row gap-8'>
			<div className='flex flex-col gap-6'>
				<Skill name="backend" score={13} />
				<Skill name="backend" score={13} />
				<Skill name="backend" score={13} />
				<Skill name="backend" score={13} />
			</div>
			<Container title='LANGUAGES' items={[
				{
					name: "Rust",
					score: 13
				},
				{
					name: "TS",
					score: 12
				},
				{
					name: "JS",
					score: 11
				},
				{
					name: "LUA",
					score: 7
				},
				{
					name: "C++",
					score: 6
				},
				{
					name: "HTML",
					score: 14
				},
				{
					name: "C",
					score: 7
				},
			].slice(0, 7)} width='25rem' />
			<div className='flex flex-col gap-9'>

				<Container title='LANGUAGES' items={[
					{
						name: "Rocket",
						score: 9
					},
					{
						name: "NextJS",
						score: 11
					},
					{
						name: "React",
						score: 12
					},
					{
						name: "Awesomewm",
						score: 13
					}
				].slice(0, 4)} width='25rem' gap={20} cols={2} />
				<Container title='TOOLS' items={[
					{
						name: "MongoDB",
						score: 9
					},
					{
						name: "Telegraf",
						score: 11
					},
					{
						name: "MQTT",
						score: 12
					},
				].slice(0, 3)} width='25rem' gap={40} />
			</div>
			<div className='p-5 border-white border-2 rounded-lg flex flex-col h-fit'>
				<div className="text-center mb-6">
					PROJECTS
				</div>
				<div className={`flex flex-col gap-[68px]`}>
					<Row logo='/512_skillsheets.png' name='Skillsheets' />
					<Row logo='/512_blush.png' name='Blush' />
					<Row logo='/512_cardinal.png' name='Cardinal' />
					<Row logo='/512_kuri.png' name='Kuri' />
				</div>
			</div>
		</div>
	</div>
}
type RowProps = {
	name: string,
	logo: string,
};
function Row(props: RowProps, index: number) {
	return <div className="flex flex-col" key={index}>
		<div className={`flex flex-row gap-14 justify-between m-1 mt-0 mb-0`}>
			<p className="font-bold uppercase">
				{props.name}
			</p>
			<Image className='mb-6' src={props.logo} width={30} alt={`${props.name} logo`} height={30} />
		</div>
		<Divider />
	</div>
}
export default App;