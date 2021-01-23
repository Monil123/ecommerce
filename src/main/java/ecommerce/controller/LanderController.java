package ecommerce.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import ecommerce.bean.Book;
import ecommerce.bean.Image;
import ecommerce.service.BookService;
import ecommerce.util.ApiCaller;

@RestController
public class LanderController {

	@Autowired
	private ApiCaller apicaller;
	
	@Autowired
	private BookService book;
	
	@RequestMapping(value = "/api/v1/image", method = RequestMethod.GET)
	public Image[] image() {
		Image[] images;
		try {
			images = new Gson().fromJson(apicaller.getText("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json"), Image[].class);
		} catch (IOException e) {
			images = null;
		}
		return images;
	}

	@RequestMapping(value = "/api/v1/book", method = RequestMethod.GET)
	public Book[] book(@RequestParam(defaultValue="ASC") String sortOrder) {
		return book.sortBooks(sortOrder);
	}
}
