import { ListObjectsCommand } from '@aws-sdk/client-s3';
import { s3Client, endpoint } from '../../../lib/s3Client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use the S3 client to list objects in the bucket
    const listParams = {
      Bucket: 'nextjsdemob4tman',
    };

    const listResult = await s3Client.send(new ListObjectsCommand(listParams));

    // Extract the list of object keys from the response
    const objectKeys = listResult.Contents.map((object) => object.Key);

    // Construct URLs for each object
    const objectUrls = objectKeys.map((key) => `${endpoint}/${listParams.Bucket}/${key}`);

    return NextResponse.json({
      objectUrls,
    });
  } catch (error) {
    console.error('Error listing objects:', error);

    return NextResponse.json('Error listing objects', {
      status: 500,
    });
  }
}