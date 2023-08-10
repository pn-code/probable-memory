import AccountForm from "../components/forms/AccountForm";

export default async function OnboardingPage() {
    return (
        <main className="w-full h-full">
            <h1 className="text-2xl font-semibold bg-navy-blue text-white p-4 lg:rounded-t-sm">
                Onboarding
            </h1>
            <p className="text-gray-800 bg-blue-200 text-sm font-semibold px-4 py-1">
                Complete your profile now
            </p>

            <AccountForm />
        </main>
    );
}
