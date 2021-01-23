package ecommerce.service;

import ecommerce.bean.Book;

public interface BookService {
	public Book[] sortBooks(String sortOrder);
}
