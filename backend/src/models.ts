import { Schema, model, connect } from 'mongoose';

interface IPair {
	name: string,
	level: string,
};

interface IProject {
	name: string,
	logo: string
};

interface ISheet {
	scopes: IPair[],
	languages: IPair[],
	frameworks: IPair[],
	tools: IPair[],
	projects: IProject[],
	name: string,
	species: string,
};

const SPair = {
	name: String,
	level: String,
};

const SProject = {
	name: String,
	logo: String,
};

const sheetSchema = new Schema<ISheet>({
	scopes: [SPair],
	languages: [SPair],
	frameworks: [SPair],
	tools: [SPair],
	projects: [SProject],
	name: String,
	species: String,
});

export const Sheet = model<ISheet>('Sheet', sheetSchema);