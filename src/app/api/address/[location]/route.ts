import { NextRequest, NextResponse } from "next/server";


interface Data {
    resource_id: string;
    limit: number;
    q: string;
}

interface ApiResponse {
    success: boolean;
    result: {
        total: number;
        [key: string]: any;
    };
}

export async function GET(req: NextRequest, { params }: { params: { location: string } } ) {
    const {location} = params;

    try {
        const data: Data = {
            resource_id: '8f714b6f-c35c-4b40-a0e7-547b675eee0e',
            limit: 10,
            q: location
        };
        const searchParams = new URLSearchParams(data as any).toString();

        const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?${searchParams}`, {
        method: 'GET',
        cache: 'force-cache',
        headers: {
            'Content-Type': 'application/json'
        }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json()
        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}

