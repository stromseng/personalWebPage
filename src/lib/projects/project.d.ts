interface Project {
    title: string;
	internalName: string;
	desciptionShort: string;
	description: string;
	appStack: string;
	githubUrl: string;
	siteUrl: string;
	deployedUrl: string;
	imageShowCaseUrl:  string;

    images: Array<imageItem>;
}

interface imageItem {
    id: number;
	name: string;
	imgurl: string;
	attribution: string;
}