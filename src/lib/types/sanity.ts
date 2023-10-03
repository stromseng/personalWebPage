export interface Project {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	githubLink: string;
	hostedLink: string;
	images: Image[];
	longDescription: string;
	mainImage: MainImage;
	projectType: string;
	shortDescription: string;
	slug: Slug;
	sortOrder: number;
	tags: string[];
	title: string;
	_updatedAt: Date;
}

export interface Image {
	_key: string;
	_type: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface MainImage {
	_type: string;
	asset: Asset;
}

export interface Slug {
	_type: string;
	current: string;
}
