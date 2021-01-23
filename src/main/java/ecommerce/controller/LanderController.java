package ecommerce.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ecommerce.bean.Book;
import ecommerce.bean.Image;

@RestController
public class LanderController {

	@RequestMapping(value = "/api/v1/image", method = RequestMethod.GET)
	public Image[] image() {
		RestTemplate restTemplate = new RestTemplate();
		Image[] images = restTemplate.getForObject("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json", Image[].class);
		System.out.println(images.toString());
		return images;
	}
	
	@RequestMapping(value = "/api/v1/book", method = RequestMethod.GET)
	public Book[] book() {
		RestTemplate restTemplate = new RestTemplate();
		Book[] books = restTemplate.getForObject("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json", Book[].class);
		System.out.println(books.toString());
		return books;
	}
	
}
