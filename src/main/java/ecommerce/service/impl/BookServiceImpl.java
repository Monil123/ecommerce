package ecommerce.service.impl;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import ecommerce.bean.Book;
import ecommerce.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Override
	public Book[] sortBooks(String sortOrder) {
		RestTemplate restTemplate = new RestTemplate();
		Book[] books = restTemplate.getForObject(
				"https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json", Book[].class);
		
		if("ASC".equalsIgnoreCase(sortOrder)) {
			return sortBooksAscending(books);
		} else if("DESC".equalsIgnoreCase(sortOrder)) {
			return sortBooksDescending(books);
		} else {
			return null;
		}
	}

	private Book[] sortBooksDescending(Book[] books) {
		Collections.sort(Arrays.asList(books), new Comparator<Book>() {
			@Override
			public int compare(final Book book1, final Book book2) {
				return book2.getAverage_rating().compareTo(book1.getAverage_rating());
			}
		});
		return books;
	}
	
	private Book[] sortBooksAscending(Book[] books) {
		Collections.sort(Arrays.asList(books), new Comparator<Book>() {
			@Override
			public int compare(final Book book1, final Book book2) {
				return book1.getAverage_rating().compareTo(book2.getAverage_rating());
			}
		});
		return books;
	}
}
