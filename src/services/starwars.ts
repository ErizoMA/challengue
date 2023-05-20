import instance from "../config/axios";
import Character from "../models/Character";

export async function getCharacters(): Promise<Character[]> {
	try {
		const response = await instance.get("/people");
		const characters = response.data;
		return characters;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function getCharacter(id: string): Promise<Character> {
	try {
		const response = await instance.get(`/people/${id}`);
		const character = response.data;
		return character;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
