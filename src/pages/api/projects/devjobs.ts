import projects from '../../../../utils/api/json/ServerProjescts.json'
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(projects)
}