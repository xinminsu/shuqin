import type { NextPageWithLayout } from './_app'
import Head from 'next/head';
import {
    Layout,
    Form,
    Select,
    Input,
    DatePicker,
    Switch,
    Slider,
    Button,
} from 'antd';

import ULayout from '../components/ulayout'
import Sidebar from '../components/sidebar'

const { TextArea } = Input;

const {
    Header,
    Content,
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

const Index: NextPageWithLayout = () => {
  return (
    <section>
        <Head>
            <title>Home - Nextron (with-javascript-ant-design)</title>
        </Head>

        <Content style={{ padding: 48 }}>
            <Form layout='horizontal'>
                <FormItem
                    label='实验名称:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验时间:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验类型:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验位置:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验材料:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验者:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验地点:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Input/>
                </FormItem>

                <FormItem
                    label='实验结果:'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <TextArea rows={4} maxLength={6}/>
                </FormItem>
                <FormItem
                    style={{ marginTop: 48 }}
                    wrapperCol={{ span: 8, offset: 8 }}
                >
                    <Button size='large' htmlType='submit'>
                        OK
                    </Button>
                    <Button size='large' style={{ marginLeft: 8 }}>
                        Cancel
                    </Button>
                </FormItem>
            </Form>
        </Content>
    </section>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ULayout>
      <Sidebar />
      {page}
    </ULayout>
  )
}
