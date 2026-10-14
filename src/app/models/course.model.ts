export interface Course {
  id: string;
  title: string;
  description: string;
  durationWeeks: number;
  isActive: boolean;
}

export type CourseDTO = Omit<Course, 'id'>;

export type CourseUpdatePayload = Partial<Omit<Course, 'id'>>;

export type CoursePreview = Pick<Course, 'title' | 'description'>;

export type ReadonlyCourseState = Readonly<Course>;

export interface ServerResponse<T> {
  data: T;
  status: number;
  success: boolean;
}



