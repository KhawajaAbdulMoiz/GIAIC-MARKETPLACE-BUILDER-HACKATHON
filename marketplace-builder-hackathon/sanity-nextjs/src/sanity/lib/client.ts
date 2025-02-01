
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'tm81kbvj', 
  dataset: 'production',       
  apiVersion: '2023-01-01',    
  token: 'sk1zYLo37gbqSHKhRZeCT7thj0cn8diBgHSTuXmDG6Oc6NQmiMRQowIg7yhTV2LqEewQ1Afc4v0lCV4h48RVXSvdkiNA58Lf4cHC3AQppAmrPGACeiIXyhUseAFi92IZVsSXeaCWM4zBL2qFGFmMSYfGvBGh7aJV2s8KQAGI7maqJPd4Tzul', // Optional, if you're using an API token
  useCdn: true,  
  
});


