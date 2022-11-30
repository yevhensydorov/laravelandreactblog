import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/inertia-react';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Posts" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1>Posts</h1>
                <form onSubmit={submit}>
                    <textarea
                        value={data.title}
                        placeholder="Add a post title?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('title', e.target.value)}
                    ></textarea>
                    <InputError message={errors.title} className="mt-2" />
                    <PrimaryButton className="mt-4" processing={processing}>Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}