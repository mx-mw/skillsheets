import Divider from "./Divider";

type ContainerProps = {
	width: string,
	title: string,
	cols?: number,
	gap?: number,
	items: RowProps[]
};

type RowProps = {
	score: number,
	name: string,
};

function Row(props: RowProps, index: number, width: number) {
	return <div className="flex flex-col" key={index}>
		<div className={`flex flex-row gap-${width} justify-between m-1 mt-0 mb-0`}>
			<p className="font-inter">
				{props.score}
			</p>
			<p className="font-inter text-right">
				{props.name}
			</p>
		</div>
		<Divider />
	</div>
}

export default function Container(props: ContainerProps) {
	let cols = props.cols ?? 1;
	let rows = cols > 1 ? 4 : 16;
	let gap = props.gap ?? 32;
	let items = props.items.map((v, i) => Row(v, i, gap))
	return <div className={`p-5 border-white border-2 rounded-lg flex flex-col h-fit`}>
		<div className="text-center mb-6">
			{props.title}
		</div>
		<div className={`grid grid-cols-${cols} grid-rows-${rows} gap-6`}>
			{items}
		</div>
	</div>
}