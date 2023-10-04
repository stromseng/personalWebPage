import { createClient } from '@sanity/client';

export default createClient({
	projectId: 'xxc5ksdw',
	dataset: 'production',
	apiVersion: '2023-10-02',
	useCdn: false
});
