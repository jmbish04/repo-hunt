import React from 'react';

export function RepoList({ repos }) {
    if (!repos || repos.length === 0) {
        return <p className="text-gray-500">No repos have been submitted yet!</p>;
    }

    return (
        <div className="space-y-4">
            {repos.map(repo => (
                <div key={repo.id} className="p-4 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold text-blue-600">
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </h2>
                    <p className="mt-2 text-gray-700">{repo.description}</p>
                    <p className="mt-4 text-xs text-gray-400">
                        Submitted {new Date(repo.submitted_at).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </div>
    );
}
