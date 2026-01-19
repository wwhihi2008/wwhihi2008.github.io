import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ElMessage } from 'element-plus';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { apiSession, type APIRequest } from '@wwhihi2008_vue/api-gateway';
import { ossSession } from '@wwhihi2008_vue/oss';

apiSession.baseURL = 'https://devgj.zhongcaicloud.com/api/fc';
apiSession.token = {
    tokenKey: 'x-xf-sso-token-fc',
    tokenValue: 'ez2L3pbMN8Zgr8DufFKZ190jynN9YcnlhD42aIpLWfXyK1e9hyIseJK1Hu3XXiUh'
};
apiSession.defaultResponseErrorHandler = (_: APIRequest, error: Error) => {
    ElMessage(error.message);
};

ossSession.options = {
    region: 'oss-cn-hangzhou',
    bucket: 'fc-bucket-hz-01',
    endpoint: 'jrgjstatic.zhongcai.com',
    directory: 'dev'
}

const app = createApp(App);
app.mount('#app');
app.use(ElementPlus)
