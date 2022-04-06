export class Tour {
    id: number;
    title: string;
    main_media_id: number;
    main_media_path: string;
    destination_id: number;
    destination_name: string;
    trip_program: string;
    trip_program_title: string;
    trip_program_media_id: number;
    trip_program_media_path: string;
    expectation_title: string;
    expectation_description: string;
    expectation_media_id: number;
    expectation_media_path: string;
    inclusions: string[];
    inclusions_media_id: number;
    inclusions_media_path: number;
    exclusions: string[];
    exclusions_media_id: number;
    exclusions_media_path: number;
    tour_details: TourDetails[] = [new TourDetails()];
    tour_price: Pricing[] = [];
    tour_dates: TourDates[] = [];
    tour_type: string;
}

export class Pricing {
    title: string;
    sub_title: string;
    persons_number: string;
    additional_notes: string;
    price: number;
    perPerson:number
}
export class TourDetails {
    time_range: string;
    title: string;
    description: string;
    media_id: number;
    media_path: string;
}
class TourDates {
    tour_date: string;
}

export class FeaturedArea {
    id: number;
    title: string;
    sub_title: string;
    tag: string;
    btn_name: string;
    btn_link: string;
    is_active: number = 1;
    media_id: number;
    media_path: string
}